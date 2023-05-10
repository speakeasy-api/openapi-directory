# search

## Overview

Look for stuff on GitHub.

### Available Operations

* [searchCode](#searchcode) - Search code
* [searchCommits](#searchcommits) - Search commits
* [searchIssuesAndPullRequests](#searchissuesandpullrequests) - Search issues and pull requests
* [searchLabels](#searchlabels) - Search labels
* [searchRepos](#searchrepos) - Search repositories
* [searchTopics](#searchtopics) - Search topics
* [searchUsers](#searchusers) - Search users

## searchCode

Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#pagination).

When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.3/rest/reference/search#text-match-metadata).

For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:

`q=addClass+in:file+language:js+repo:jquery/jquery`

This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.

#### Considerations for code search

Due to the complexity of searching code, there are a few restrictions on how searches are performed:

*   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
*   Only files smaller than 384 KB are searchable.
*   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/search#search-code>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCodeSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCodeRequest();
    $request->order = OrderEnum::DESC;
    $request->page = 430146;
    $request->perPage = 873320;
    $request->q = 'eum';
    $request->sort = SearchCodeSortEnum::INDEXED;

    $response = $sdk->search->searchCode($request);

    if ($response->searchCode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchCommits

Find commits via various criteria on the default branch (usually `main`). This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#pagination).

When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match
metadata](https://docs.github.com/enterprise-server@3.3/rest/reference/search#text-match-metadata).

For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:

`q=repo:octocat/Spoon-Knife+css`

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/search#search-commits>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchCommitsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchCommitsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchCommitsRequest();
    $request->order = OrderEnum::DESC;
    $request->page = 531195;
    $request->perPage = 502393;
    $request->q = 'nihil';
    $request->sort = SearchCommitsSortEnum::COMMITTER_DATE;

    $response = $sdk->search->searchCommits($request);

    if ($response->searchCommits200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchIssuesAndPullRequests

Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#pagination).

When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted
search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.3/rest/reference/search#text-match-metadata).

For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.

`q=windows+label:bug+language:python+state:open&sort=created&order=asc`

This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.

**Note:** For [user-to-server](https://docs.github.com/enterprise-server@3.3/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) GitHub App requests, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see "[Searching only issues or pull requests](https://docs.github.com/enterprise-server@3.3/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)."

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/search#search-issues-and-pull-requests>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchIssuesAndPullRequestsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchIssuesAndPullRequestsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchIssuesAndPullRequestsRequest();
    $request->order = OrderEnum::ASC;
    $request->page = 645544;
    $request->perPage = 541822;
    $request->q = 'nostrum';
    $request->sort = SearchIssuesAndPullRequestsSortEnum::REACTIONS_THINKING_FACE;

    $response = $sdk->search->searchIssuesAndPullRequests($request);

    if ($response->searchIssuesAndPullRequests200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchLabels

Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#pagination).

When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.3/rest/reference/search#text-match-metadata).

For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:

`q=bug+defect+enhancement&repository_id=64778136`

The labels that best match the query appear first in the search results.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/search#search-labels>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchLabelsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchLabelsRequest();
    $request->order = OrderEnum::DESC;
    $request->page = 667213;
    $request->perPage = 318379;
    $request->q = 'rem';
    $request->repositoryId = 168142;
    $request->sort = SearchLabelsSortEnum::CREATED;

    $response = $sdk->search->searchLabels($request);

    if ($response->searchLabels200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchRepos

Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#pagination).

When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.3/rest/reference/search#text-match-metadata).

For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:

`q=tetris+language:assembly&sort=stars&order=desc`

This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/search#search-repositories>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchReposRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchReposSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchReposRequest();
    $request->order = OrderEnum::ASC;
    $request->page = 811259;
    $request->perPage = 318028;
    $request->q = 'labore';
    $request->sort = SearchReposSortEnum::UPDATED;

    $response = $sdk->search->searchRepos($request);

    if ($response->searchRepos200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchTopics

Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#pagination). See "[Searching topics](https://docs.github.com/enterprise-server@3.3/articles/searching-topics/)" for a detailed list of qualifiers.

When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.3/rest/reference/search#text-match-metadata).

For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:

`q=ruby+is:featured`

This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/search#search-topics>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchTopicsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTopicsRequest();
    $request->page = 901651;
    $request->perPage = 965735;
    $request->q = 'officia';

    $response = $sdk->search->searchTopics($request);

    if ($response->searchTopics200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchUsers

Find users via various criteria. This method returns up to 100 results [per page](https://docs.github.com/enterprise-server@3.3/rest/overview/resources-in-the-rest-api#pagination).

When searching for users, you can get text match metadata for the issue **login**, public **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.3/rest/reference/search#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/enterprise-server@3.3/rest/reference/search#text-match-metadata).

For example, if you're looking for a list of popular users, you might try this query:

`q=tom+repos:%3E42+followers:%3E1000`

This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/search#search-users>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchUsersSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchUsersRequest();
    $request->order = OrderEnum::ASC;
    $request->page = 763869;
    $request->perPage = 617497;
    $request->q = 'quaerat';
    $request->sort = SearchUsersSortEnum::JOINED;

    $response = $sdk->search->searchUsers($request);

    if ($response->searchUsers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
