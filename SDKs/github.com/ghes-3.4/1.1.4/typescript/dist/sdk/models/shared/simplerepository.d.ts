import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
/**
 * A GitHub repository.
 */
export declare class SimpleRepository extends SpeakeasyBase {
    /**
     * A template for the API URL to download the repository as an archive.
     */
    archiveUrl: string;
    /**
     * A template for the API URL to list the available assignees for issues in the repository.
     */
    assigneesUrl: string;
    /**
     * A template for the API URL to create or retrieve a raw Git blob in the repository.
     */
    blobsUrl: string;
    /**
     * A template for the API URL to get information about branches in the repository.
     */
    branchesUrl: string;
    /**
     * A template for the API URL to get information about collaborators of the repository.
     */
    collaboratorsUrl: string;
    /**
     * A template for the API URL to get information about comments on the repository.
     */
    commentsUrl: string;
    /**
     * A template for the API URL to get information about commits on the repository.
     */
    commitsUrl: string;
    /**
     * A template for the API URL to compare two commits or refs.
     */
    compareUrl: string;
    /**
     * A template for the API URL to get the contents of the repository.
     */
    contentsUrl: string;
    /**
     * A template for the API URL to list the contributors to the repository.
     */
    contributorsUrl: string;
    /**
     * The API URL to list the deployments of the repository.
     */
    deploymentsUrl: string;
    /**
     * The repository description.
     */
    description: string;
    /**
     * The API URL to list the downloads on the repository.
     */
    downloadsUrl: string;
    /**
     * The API URL to list the events of the repository.
     */
    eventsUrl: string;
    /**
     * Whether the repository is a fork.
     */
    fork: boolean;
    /**
     * The API URL to list the forks of the repository.
     */
    forksUrl: string;
    /**
     * The full, globally unique, name of the repository.
     */
    fullName: string;
    /**
     * A template for the API URL to get information about Git commits of the repository.
     */
    gitCommitsUrl: string;
    /**
     * A template for the API URL to get information about Git refs of the repository.
     */
    gitRefsUrl: string;
    /**
     * A template for the API URL to get information about Git tags of the repository.
     */
    gitTagsUrl: string;
    /**
     * The API URL to list the hooks on the repository.
     */
    hooksUrl: string;
    /**
     * The URL to view the repository on GitHub.com.
     */
    htmlUrl: string;
    /**
     * A unique identifier of the repository.
     */
    id: number;
    /**
     * A template for the API URL to get information about issue comments on the repository.
     */
    issueCommentUrl: string;
    /**
     * A template for the API URL to get information about issue events on the repository.
     */
    issueEventsUrl: string;
    /**
     * A template for the API URL to get information about issues on the repository.
     */
    issuesUrl: string;
    /**
     * A template for the API URL to get information about deploy keys on the repository.
     */
    keysUrl: string;
    /**
     * A template for the API URL to get information about labels of the repository.
     */
    labelsUrl: string;
    /**
     * The API URL to get information about the languages of the repository.
     */
    languagesUrl: string;
    /**
     * The API URL to merge branches in the repository.
     */
    mergesUrl: string;
    /**
     * A template for the API URL to get information about milestones of the repository.
     */
    milestonesUrl: string;
    /**
     * The name of the repository.
     */
    name: string;
    /**
     * The GraphQL identifier of the repository.
     */
    nodeId: string;
    /**
     * A template for the API URL to get information about notifications on the repository.
     */
    notificationsUrl: string;
    /**
     * A GitHub user.
     */
    owner: SimpleUser;
    /**
     * Whether the repository is private.
     */
    private: boolean;
    /**
     * A template for the API URL to get information about pull requests on the repository.
     */
    pullsUrl: string;
    /**
     * A template for the API URL to get information about releases on the repository.
     */
    releasesUrl: string;
    /**
     * The API URL to list the stargazers on the repository.
     */
    stargazersUrl: string;
    /**
     * A template for the API URL to get information about statuses of a commit.
     */
    statusesUrl: string;
    /**
     * The API URL to list the subscribers on the repository.
     */
    subscribersUrl: string;
    /**
     * The API URL to subscribe to notifications for this repository.
     */
    subscriptionUrl: string;
    /**
     * The API URL to get information about tags on the repository.
     */
    tagsUrl: string;
    /**
     * The API URL to list the teams on the repository.
     */
    teamsUrl: string;
    /**
     * A template for the API URL to create or retrieve a raw Git tree of the repository.
     */
    treesUrl: string;
    /**
     * The URL to get more information about the repository from the GitHub API.
     */
    url: string;
}
