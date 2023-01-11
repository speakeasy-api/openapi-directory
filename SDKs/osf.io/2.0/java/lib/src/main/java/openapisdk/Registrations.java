package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;

public class Registrations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Registrations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * registrationsChildrenList - List all child registrations
     *
     * 
     * A paginated list of children of a registration.
     * 
     * The list consists of the next level child registrations for the given registration. The returned registrations are sorted by their `date_modified`, with the most recently updated child registrations appearing first.
     * 
     * The list will include child registrations that are public, as well as child registrations that are private, if the authenticated user has permission to view them.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 child registrations. If the given registration has zero child registrations, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the child registration.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * 
     * #### Filtering
     * You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/children/?filter[title]=reproducibility.
     * 
     * Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
     * 
     * Most fields are string fields and will be filtered using simple substring matching. Public is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting true or false in the query will cause the match to fail.
    **/
    public openapisdk.models.operations.RegistrationsChildrenListResponse registrationsChildrenList(openapisdk.models.operations.RegistrationsChildrenListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/children/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsChildrenListResponse res = new openapisdk.models.operations.RegistrationsChildrenListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsCitationRead - Retrieve a citation
     *
     * Retrieves the citation style details for a registration, in CSL format.
     * #### Returns
     * Returns a JSON object with a `data` key that contains the representation of the details necessary for the citation style.
    **/
    public openapisdk.models.operations.RegistrationsCitationReadResponse registrationsCitationRead(openapisdk.models.operations.RegistrationsCitationReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/citations/{citation_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsCitationReadResponse res = new openapisdk.models.operations.RegistrationsCitationReadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsCitationsList - List all citation styles
     *
     * 
     * A paginated list of the registration's alternative citation styles
     * 
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 citation styles. Each resource in the array is a separate citation styles object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * You can optionally request that the response only include citation styles that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/citations/?filter[title]=open.
     * 
     * Citation styles may be filtered by their `id`, `title`, `short-title`, and `summary`.
    **/
    public openapisdk.models.operations.RegistrationsCitationsListResponse registrationsCitationsList(openapisdk.models.operations.RegistrationsCitationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/citations/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsCitationsListResponse res = new openapisdk.models.operations.RegistrationsCitationsListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsCommentsList - List all comments
     *
     * 
     * A paginated list of the registration's comments.
     * 
     * The returned comments are sorted by their creation date, with the most recent comments appearing first.
     * #### Permissions
     * Comments of public registrations are given read-only access to everyone.
     * 
     * If the comment-level is `private`, only registration contributors have permission to comment.
     * 
     * If the comment-level is `public`, any logged-in OSF user can comment.
     * 
     * Comments of private registrations are only visible to contributors and administrators on the registration.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * You can optionally request that the response only include comments that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wuerf/comments/?filter[target]=wuerf
     * 
     * Comments may be filtered by their `deleted`, `target`, `date_created`, `date_modified`.
     * 
     * Most fields are string fields and will be filtered using simple substring matching. Deleted is a boolean field, and can be filtered using truthy values, such as **true**, **false**, **0** or **1**. Note that quoting `true` or `false` in the query will cause the match to fail.
    **/
    public openapisdk.models.operations.RegistrationsCommentsListResponse registrationsCommentsList(openapisdk.models.operations.RegistrationsCommentsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/comments/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsCommentsListResponse res = new openapisdk.models.operations.RegistrationsCommentsListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsContributorsList - List all contributors
     *
     * A paginated list of all contributors on this registration.
     * The returned contributors are sorted by their index.
     * 
     * Contributors are users who can make changes to the registration or, in the case of private registration, have read access to the registration.
     * 
     * Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed in the contributors list on the OSF, while non-bibliographic contributors are not.
     * 
     * Note that if an anonymous view_only key is being used to view the list of contributors, the user relationship will not be exposed and the contributor ID will be an empty string.
     * 
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 contributors. Each resource in the array contains the full representation of the contributor. Additionally, the full representation of the user this contributor represents is automatically embedded within the `data` key of the response.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * You can optionally request that the response only include contributors that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/contributors/?filter[bibliographic]=true.
     * 
     * Contributors may be filtered by their `bibliographic` and `permission` attributes.
    **/
    public openapisdk.models.operations.RegistrationsContributorsListResponse registrationsContributorsList(openapisdk.models.operations.RegistrationsContributorsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/contributors/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsContributorsListResponse res = new openapisdk.models.operations.RegistrationsContributorsListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsContributorsRead - Retrieve a contributor
     *
     * Retrieves the details of a contributor on this registration.
     * 
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested contributor, if the request is successful.
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    public openapisdk.models.operations.RegistrationsContributorsReadResponse registrationsContributorsRead(openapisdk.models.operations.RegistrationsContributorsReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/contributors/{user_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsContributorsReadResponse res = new openapisdk.models.operations.RegistrationsContributorsReadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsFilesList - List all files
     *
     * List of all the registration's files/folders for a given storage provider.
     * 
     * #### Returns
     * 
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of files. Each resource in the array is a separate file object and contains the full representation of the file.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * 
     * #### Filtering
     * 
     * You can optionally request that the response only include files that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/files/osfstorage/?filter[kind]=file
     * 
     * Files may be filtered by `id`, `name`, `node`, `kind`, `path`, `provider`, `size`, and `last_touched`.
    **/
    public openapisdk.models.operations.RegistrationsFilesListResponse registrationsFilesList(openapisdk.models.operations.RegistrationsFilesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/files/{provider}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsFilesListResponse res = new openapisdk.models.operations.RegistrationsFilesListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsFilesRead - Retrieve a file
     *
     * Retrieves the details of a registration file for the given storage provider.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested registration file object, if the request is successful.
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    public openapisdk.models.operations.RegistrationsFilesReadResponse registrationsFilesRead(openapisdk.models.operations.RegistrationsFilesReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/files/{provider}/{path}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsFilesReadResponse res = new openapisdk.models.operations.RegistrationsFilesReadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsForksCreate - Create a fork
     *
     * Creates a fork of the given registration.
     * 
     * Forking a project creates a copy of an existing registration and all of its contents. The fork always points back to the original registration, forming a network of registrations.
     * 
     * You might use a fork to copy another's work to build on and extend. For example, a professor may create an OSF project of materials for individual student use. Each student forks the project to have his or her own copy of the materials to start his/her own work.
     * 
     * When creating a fork, your fork will only contain public components of the current registration and components for which you are a contributor. Private components that you do not have access to will not be forked.
     * #### Required
     * There are no required attributes when creating a fork, as all of the forked registration's attributes will be copied from the current registration.
     * 
     * The `title` field is optional, with the default title being "Fork of " prepended to the current registration's title.
     * #### Returns
     * Returns a JSON object with a `data` key containing the complete representation of the forked registration, if the request is successful.
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    public openapisdk.models.operations.RegistrationsForksCreateResponse registrationsForksCreate(openapisdk.models.operations.RegistrationsForksCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/forks/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsForksCreateResponse res = new openapisdk.models.operations.RegistrationsForksCreateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }

        return res;
    }
	
	
    /**
     * registrationsForksList - List all forks
     *
     * 
     * A paginated list of the registration’s forks
     * 
     * The returned forks are sorted by their `forked_date`, with the most recent forks appearing first.
     * 
     * Forking a registration creates a copy of an existing registration and all of its contents.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 forks. If the current registration has no fork, the `data` key will contain an empty array. Each resource in the array is a separate registration object and contains the full representation of the registration's fork.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.RegistrationsForksListResponse registrationsForksList(openapisdk.models.operations.RegistrationsForksListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/forks/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsForksListResponse res = new openapisdk.models.operations.RegistrationsForksListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsIdentifiersList - List all identifiers
     *
     * A paginated list of the registration's identifiers.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of identifiers. Each resource in the array is a separate identifier object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * 
     * You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/identifiers/?filter[category]=ark
     * 
     * Identifiers may be filtered by their `category` e.g `ark` or `doi`.
    **/
    public openapisdk.models.operations.RegistrationsIdentifiersListResponse registrationsIdentifiersList(openapisdk.models.operations.RegistrationsIdentifiersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/identifiers/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsIdentifiersListResponse res = new openapisdk.models.operations.RegistrationsIdentifiersListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsInstitutionsList - List all institutions
     *
     * A paginated list of institutions affiliated with the registration.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 affiliated institutions. Each resource in the array is a separate institution object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
    **/
    public openapisdk.models.operations.RegistrationsInstitutionsListResponse registrationsInstitutionsList(openapisdk.models.operations.RegistrationsInstitutionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/institutions/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsInstitutionsListResponse res = new openapisdk.models.operations.RegistrationsInstitutionsListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsLinkedNodesList - List all linked nodes
     *
     * List of all nodes linked to the registration.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * You can optionally request that the response only include nodes that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/linked_nodes/?filter[title]=reproducibility/?filter[title]=reproducibility.
     * 
     * Nodes may be filtered by their `title`, `category`, `description`, `public`, `registration`, or `tags`. `title`, `description`, and `category` are string fields and will be filteres using simple substring matching. `public`, `registration` are boolean and can be filtered using truthy values, such as `true`, `false`, `0`, `1`. `tags` is an array of simple strings.
    **/
    public openapisdk.models.operations.RegistrationsLinkedNodesListResponse registrationsLinkedNodesList(openapisdk.models.operations.RegistrationsLinkedNodesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/linked_nodes/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsLinkedNodesListResponse res = new openapisdk.models.operations.RegistrationsLinkedNodesListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsList - List all registrations
     *
     * A paginated list of registrations on the OSF to which the user has access.
     * 
     * The returned registrations are those which are public or which the user has access to view.
     * 
     * Non-registered nodes cannot be accessed through this endpoint (use the [nodes](#Nodes_nodes_list) endpoints instead).
     * 
     * #### Registrations
     * A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.
     * 
     * Registrations can be made public immediately or embargoed for up to 4 years.
     * 
     * #### Withdrawals
     * Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of 10 registrations. Each resource in the array is a separate registration object and contains the full representation of the registration, meaning additional requests to a registration's detail view are not necessary.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * 
     * This request should never return an error.
     * #### Filtering
     * You can optionally request that the response only include registrations that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/?filter[title]=open.
     * 
     * Registrations may be filtered by their `id`, `title`, `category`, `description`, `public`, `tags`, `date_created`, `date_modified`, `root`, `parent`, and `contributors`.
    **/
    public openapisdk.models.operations.RegistrationsListResponse registrationsList() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsListResponse res = new openapisdk.models.operations.RegistrationsListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsLogsList - List all logs
     *
     * A paginated list of the registration's logs.
     * 
     * The returned logs are sorted by their `date`, with the most recents logs appearing first.
     * 
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 logs. Each resource in the array is a separate logs object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Filtering
     * You can optionally request that the response only include logs that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wucr8/logs/?filter[action]=made_private.
     * 
     * Logs may be filtered by their `action`, and `date`.
    **/
    public openapisdk.models.operations.RegistrationsLogsListResponse registrationsLogsList(openapisdk.models.operations.RegistrationsLogsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/logs/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsLogsListResponse res = new openapisdk.models.operations.RegistrationsLogsListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsPartialUpdate - Update a registration
     *
     * Updates a registration's privacy from **private** to **public**.
     * 
     * Registrations can be updated with either a **PUT** or **PATCH** request. The `public` field is the only field that can be modified on a registration
     * 
     * Registrations can only be turned from private to public, not vice versa.
     * #### Permissions
     * Only project administrators may update a registration.
     * #### Returns
     * Returns a JSON object with a `data` key containing the new representation of the updated registration, if the request is successful.
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    public openapisdk.models.operations.RegistrationsPartialUpdateResponse registrationsPartialUpdate(openapisdk.models.operations.RegistrationsPartialUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsPartialUpdateResponse res = new openapisdk.models.operations.RegistrationsPartialUpdateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * registrationsProvidersList - List all storage providers
     *
     * A paginated list of storage providers enabled on the registration
     * 
     * Users of the OSF may access their data on a [number of cloud-storage services](https://api.osf.io/v2/#storage-providers) that have integrations with the OSF. We call these **providers**. By default, every node has access to the OSF-provided storage but may use as many of the supported providers as desired.
     * 
     * 
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 files. Each resource in the array is a separate file object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * 
     * Note: In the OSF filesystem model, providers are treated as folders, but with special properties that distinguish them from regular folders. Every provider folder is considered a root folder, and may not be deleted through the regular file API.
    **/
    public openapisdk.models.operations.RegistrationsProvidersListResponse registrationsProvidersList(openapisdk.models.operations.RegistrationsProvidersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/files/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsProvidersListResponse res = new openapisdk.models.operations.RegistrationsProvidersListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsRead - Retrieve a registration
     *
     * Retrieve the details of a given registration.
     * #### Permissions
     * Only project contributors may retrieve the details of a registration that is embargoed, or has not yet been made public. Attempting to retrieve a private registration for which you are not a contributor will result in a **403 Forbidden** response.
     * 
     * Authentication is not required to view the details of a public registration, as public registrations give read-only access to everyone.
     * #### Registrations
     * A registration on the OSF creates a frozen, time-stamped version of a project that cannot be edited or deleted. The *original project* can still be edited, while the registered version cannot.
     * 
     * Registrations can be made public immediately or embargoed for up to 4 years.
     * 
     * #### Withdrawals
     * Registrations cannot be deleted, but they can be withdrawn. Withdrawing a registration removes the content of the registration but leaves behind basic metadata. A withdrawn registration will display a limited subset of information, namely, title, description, date_created, date_registered, date_withdrawn, registration, withdrawn, withdrawal_justification, and registration supplement. All other fields will be displayed as null. Additionally, the only relationship that remains accesible for a withdrawn registration is the contributors. All other relationships will return a **403 Forbidden** response.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested registration, if the request is successful.
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
    **/
    public openapisdk.models.operations.RegistrationsReadResponse registrationsRead(openapisdk.models.operations.RegistrationsReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsReadResponse res = new openapisdk.models.operations.RegistrationsReadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsViewOnlyLinksList - List all view only links
     *
     * A paginated list of view only links created for this registration.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * 
     * The `data` key contains an array of up to 10 view only links. Each resource in the array is a view only link object.
     * 
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * 
     * #### Permissions
     * 
     * View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.
     * 
     * #### Filtering
     * 
     * You can optionally request that the response only include view only links that match your filters by utilizing the `filter` query parameter, e.g. https://api.osf.io/v2/registrations/wu3a4/view_only_links/?filter[anonymous]=true.
     * 
     * View Only Links may be filtered based on their `name`, `anonymous` and `date_created` fields. Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.
    **/
    public openapisdk.models.operations.RegistrationsViewOnlyLinksListResponse registrationsViewOnlyLinksList(openapisdk.models.operations.RegistrationsViewOnlyLinksListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/view_only_links/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsViewOnlyLinksListResponse res = new openapisdk.models.operations.RegistrationsViewOnlyLinksListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsViewOnlyLinksRead - Retrieve a view only link
     *
     * Retrieves the details of a view only link created from this registration.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested view only link, if the request is successful.
     * 
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     * #### Permissions
     * 
     * View only links on a registration, public or private, are readable and writeable only by users that are administrators on the registration.
    **/
    public openapisdk.models.operations.RegistrationsViewOnlyLinksReadResponse registrationsViewOnlyLinksRead(openapisdk.models.operations.RegistrationsViewOnlyLinksReadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/view_only_links/{link_id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsViewOnlyLinksReadResponse res = new openapisdk.models.operations.RegistrationsViewOnlyLinksReadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * registrationsWikisList - List all wikis
     *
     * A paginated list of the registration's wiki pages
     * #### Returns
     * A list of all registration's current wiki page versions ordered by their date_modified. Each resource contains the full representation of the wiki, meaning additional requests to an individual wiki's detail view are not necessary.
     * 
     * If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     * #### Filtering
     * Wiki pages can be filtered based on their `name` and `date_modified` fields.
     * + `filter[name]=<Str>` -- filter wiki pages by name
     * + `filter[date_modified][comparison_operator]=YYYY-MM-DDTH:M:S` -- filter wiki pages based on date modified.
     * 
     * Possible comparison operators include 'gt' (greater than), 'gte'(greater than or equal to), 'lt' (less than) and 'lte' (less than or equal to). The date must be in the format YYYY-MM-DD and the time is optional.
    **/
    public openapisdk.models.operations.RegistrationsWikisListResponse registrationsWikisList(openapisdk.models.operations.RegistrationsWikisListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/registrations/{registration_id}/wikis/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RegistrationsWikisListResponse res = new openapisdk.models.operations.RegistrationsWikisListResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}