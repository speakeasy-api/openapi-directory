package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Bioentity {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Bioentity(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getAnatomyGeneAssociations - Returns genes associated with a given anatomy
    **/
    public openapisdk.models.operations.GetAnatomyGeneAssociationsResponse getAnatomyGeneAssociations(openapisdk.models.operations.GetAnatomyGeneAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/anatomy/{id}/genes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAnatomyGeneAssociationsResponse res = new openapisdk.models.operations.GetAnatomyGeneAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAnatomyGeneByTaxonAssociations - Returns gene IDs for all genes associated with a given anatomy, filtered by taxon
     *
     * For example, + NCBITaxon:10090 (mouse)
    **/
    public openapisdk.models.operations.GetAnatomyGeneByTaxonAssociationsResponse getAnatomyGeneByTaxonAssociations(openapisdk.models.operations.GetAnatomyGeneByTaxonAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/anatomy/{id}/genes/{taxid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAnatomyGeneByTaxonAssociationsResponse res = new openapisdk.models.operations.GetAnatomyGeneByTaxonAssociationsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getCaseDiseaseAssociations - Returns diseases associated with a case
    **/
    public openapisdk.models.operations.GetCaseDiseaseAssociationsResponse getCaseDiseaseAssociations(openapisdk.models.operations.GetCaseDiseaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/case/{id}/diseases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCaseDiseaseAssociationsResponse res = new openapisdk.models.operations.GetCaseDiseaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCaseGenotypeAssociations - Returns genotypes associated with a case
    **/
    public openapisdk.models.operations.GetCaseGenotypeAssociationsResponse getCaseGenotypeAssociations(openapisdk.models.operations.GetCaseGenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/case/{id}/genotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCaseGenotypeAssociationsResponse res = new openapisdk.models.operations.GetCaseGenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCaseModelAssociations - Returns models associated with a case
    **/
    public openapisdk.models.operations.GetCaseModelAssociationsResponse getCaseModelAssociations(openapisdk.models.operations.GetCaseModelAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/case/{id}/models", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCaseModelAssociationsResponse res = new openapisdk.models.operations.GetCaseModelAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCasePhenotypeAssociations - Returns phenotypes associated with a case
    **/
    public openapisdk.models.operations.GetCasePhenotypeAssociationsResponse getCasePhenotypeAssociations(openapisdk.models.operations.GetCasePhenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/case/{id}/phenotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCasePhenotypeAssociationsResponse res = new openapisdk.models.operations.GetCasePhenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCaseVariantAssociations - Returns variants associated with a case
    **/
    public openapisdk.models.operations.GetCaseVariantAssociationsResponse getCaseVariantAssociations(openapisdk.models.operations.GetCaseVariantAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/case/{id}/variants", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCaseVariantAssociationsResponse res = new openapisdk.models.operations.GetCaseVariantAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDiseaseCaseAssociations - Returns cases associated with a disease
    **/
    public openapisdk.models.operations.GetDiseaseCaseAssociationsResponse getDiseaseCaseAssociations(openapisdk.models.operations.GetDiseaseCaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/disease/{id}/cases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDiseaseCaseAssociationsResponse res = new openapisdk.models.operations.GetDiseaseCaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDiseaseGeneAssociations - Returns genes associated with a disease
    **/
    public openapisdk.models.operations.GetDiseaseGeneAssociationsResponse getDiseaseGeneAssociations(openapisdk.models.operations.GetDiseaseGeneAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/disease/{id}/genes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDiseaseGeneAssociationsResponse res = new openapisdk.models.operations.GetDiseaseGeneAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDiseaseGenotypeAssociations - Returns genotypes associated with a disease
    **/
    public openapisdk.models.operations.GetDiseaseGenotypeAssociationsResponse getDiseaseGenotypeAssociations(openapisdk.models.operations.GetDiseaseGenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/disease/{id}/genotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDiseaseGenotypeAssociationsResponse res = new openapisdk.models.operations.GetDiseaseGenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDiseaseModelAssociations - Returns associations to models of the disease
     *
     * In the association object returned, the subject will be the disease, and the object will be the model.
     * The model may be a gene or genetic element.
     * 
     * If the query disease is a general class, the association subject may be to a specific disease.
     * 
     * In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.
     * 
     * In other cases, the association will be *indirect*, for
     * example, chaining over orthology. In these cases the chain
     * will be reflected in the *evidence graph*
     * 
     * * TODO: provide hook into owlsim for dynamic computation of models by similarity
    **/
    public openapisdk.models.operations.GetDiseaseModelAssociationsResponse getDiseaseModelAssociations(openapisdk.models.operations.GetDiseaseModelAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/disease/{id}/models", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDiseaseModelAssociationsResponse res = new openapisdk.models.operations.GetDiseaseModelAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDiseaseModelTaxonAssociations - Returns associations to models of the disease constrained by taxon
     *
     * See /disease/<id>/models route for full details
    **/
    public openapisdk.models.operations.GetDiseaseModelTaxonAssociationsResponse getDiseaseModelTaxonAssociations(openapisdk.models.operations.GetDiseaseModelTaxonAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/disease/{id}/models/{taxon}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDiseaseModelTaxonAssociationsResponse res = new openapisdk.models.operations.GetDiseaseModelTaxonAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDiseasePathwayAssociations - Returns pathways associated with a disease
    **/
    public openapisdk.models.operations.GetDiseasePathwayAssociationsResponse getDiseasePathwayAssociations(openapisdk.models.operations.GetDiseasePathwayAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/disease/{id}/pathways", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDiseasePathwayAssociationsResponse res = new openapisdk.models.operations.GetDiseasePathwayAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDiseasePhenotypeAssociations - Returns phenotypes associated with disease
    **/
    public openapisdk.models.operations.GetDiseasePhenotypeAssociationsResponse getDiseasePhenotypeAssociations(openapisdk.models.operations.GetDiseasePhenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/disease/{id}/phenotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDiseasePhenotypeAssociationsResponse res = new openapisdk.models.operations.GetDiseasePhenotypeAssociationsResponse() {{
            d2PAssociationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.D2PAssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.D2PAssociationResults.class);
                res.d2PAssociationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDiseasePublicationAssociations - Returns publications associated with a disease
    **/
    public openapisdk.models.operations.GetDiseasePublicationAssociationsResponse getDiseasePublicationAssociations(openapisdk.models.operations.GetDiseasePublicationAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/disease/{id}/publications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDiseasePublicationAssociationsResponse res = new openapisdk.models.operations.GetDiseasePublicationAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDiseaseSubstanceAssociations - Returns substances associated with a disease
     *
     * e.g. drugs or small molecules used to treat
    **/
    public openapisdk.models.operations.GetDiseaseSubstanceAssociationsResponse getDiseaseSubstanceAssociations(openapisdk.models.operations.GetDiseaseSubstanceAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/disease/{id}/treatment", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDiseaseSubstanceAssociationsResponse res = new openapisdk.models.operations.GetDiseaseSubstanceAssociationsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getDiseaseVariantAssociations - Returns variants associated with a disease
    **/
    public openapisdk.models.operations.GetDiseaseVariantAssociationsResponse getDiseaseVariantAssociations(openapisdk.models.operations.GetDiseaseVariantAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/disease/{id}/variants", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDiseaseVariantAssociationsResponse res = new openapisdk.models.operations.GetDiseaseVariantAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFunctionAssociations - Returns annotations associated to a function term
    **/
    public openapisdk.models.operations.GetFunctionAssociationsResponse getFunctionAssociations(openapisdk.models.operations.GetFunctionAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/function/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFunctionAssociationsResponse res = new openapisdk.models.operations.GetFunctionAssociationsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getFunctionGeneAssociations - Returns genes associated to a GO term
    **/
    public openapisdk.models.operations.GetFunctionGeneAssociationsResponse getFunctionGeneAssociations(openapisdk.models.operations.GetFunctionGeneAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/function/{id}/genes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFunctionGeneAssociationsResponse res = new openapisdk.models.operations.GetFunctionGeneAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFunctionPublicationAssociations - Returns publications associated to a GO term
    **/
    public openapisdk.models.operations.GetFunctionPublicationAssociationsResponse getFunctionPublicationAssociations(openapisdk.models.operations.GetFunctionPublicationAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/function/{id}/publications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFunctionPublicationAssociationsResponse res = new openapisdk.models.operations.GetFunctionPublicationAssociationsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getFunctionTaxonAssociations - Returns taxons associated to a GO term
    **/
    public openapisdk.models.operations.GetFunctionTaxonAssociationsResponse getFunctionTaxonAssociations(openapisdk.models.operations.GetFunctionTaxonAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/function/{id}/taxons", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFunctionTaxonAssociationsResponse res = new openapisdk.models.operations.GetFunctionTaxonAssociationsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getGeneAnatomyAssociations - Returns anatomical entities associated with a gene
    **/
    public openapisdk.models.operations.GetGeneAnatomyAssociationsResponse getGeneAnatomyAssociations(openapisdk.models.operations.GetGeneAnatomyAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/anatomy", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneAnatomyAssociationsResponse res = new openapisdk.models.operations.GetGeneAnatomyAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneCaseAssociations - Returns cases associated with a gene
    **/
    public openapisdk.models.operations.GetGeneCaseAssociationsResponse getGeneCaseAssociations(openapisdk.models.operations.GetGeneCaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/cases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneCaseAssociationsResponse res = new openapisdk.models.operations.GetGeneCaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneDiseaseAssociations - Returns diseases associated with gene
    **/
    public openapisdk.models.operations.GetGeneDiseaseAssociationsResponse getGeneDiseaseAssociations(openapisdk.models.operations.GetGeneDiseaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/diseases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneDiseaseAssociationsResponse res = new openapisdk.models.operations.GetGeneDiseaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneExpressionAssociations - Returns expression events for a gene
    **/
    public openapisdk.models.operations.GetGeneExpressionAssociationsResponse getGeneExpressionAssociations(openapisdk.models.operations.GetGeneExpressionAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/expression/anatomy", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneExpressionAssociationsResponse res = new openapisdk.models.operations.GetGeneExpressionAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneFunctionAssociations - Returns function associations for a gene
     *
     * IMPLEMENTATION DETAILS
     * ----------------------
     * 
     * Note: currently this is implemented as a query to the GO/AmiGO solr instance.
     * This directly supports IDs such as:
     * 
     *  - ZFIN e.g. ZFIN:ZDB-GENE-050417-357
     * 
     * Note that the AmiGO GOlr natively stores MGI annotations to MGI:MGI:nn. However,
     * the standard for biolink is MGI:nnnn, so you should use this (will be transparently
     * mapped to legacy ID)
     * 
     * Additionally, for some species such as Human, GO has the annotation attached to the UniProt ID.
     * Again, this should be transparently handled; e.g. you can use NCBIGene:6469, and this will be
     * mapped behind the scenes for querying.
    **/
    public openapisdk.models.operations.GetGeneFunctionAssociationsResponse getGeneFunctionAssociations(openapisdk.models.operations.GetGeneFunctionAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/function", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneFunctionAssociationsResponse res = new openapisdk.models.operations.GetGeneFunctionAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneGenotypeAssociations - Returns genotypes associated with a gene
    **/
    public openapisdk.models.operations.GetGeneGenotypeAssociationsResponse getGeneGenotypeAssociations(openapisdk.models.operations.GetGeneGenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/genotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneGenotypeAssociationsResponse res = new openapisdk.models.operations.GetGeneGenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneHomologAssociations - Returns homologs for a gene
    **/
    public openapisdk.models.operations.GetGeneHomologAssociationsResponse getGeneHomologAssociations(openapisdk.models.operations.GetGeneHomologAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/homologs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneHomologAssociationsResponse res = new openapisdk.models.operations.GetGeneHomologAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneInteractions - Returns interactions for a gene
    **/
    public openapisdk.models.operations.GetGeneInteractionsResponse getGeneInteractions(openapisdk.models.operations.GetGeneInteractionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/interactions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneInteractionsResponse res = new openapisdk.models.operations.GetGeneInteractionsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneModelAssociations - Returns models associated with a gene
    **/
    public openapisdk.models.operations.GetGeneModelAssociationsResponse getGeneModelAssociations(openapisdk.models.operations.GetGeneModelAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/models", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneModelAssociationsResponse res = new openapisdk.models.operations.GetGeneModelAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneOrthologDiseaseAssociations - Return diseases associated with orthologs of a gene
    **/
    public openapisdk.models.operations.GetGeneOrthologDiseaseAssociationsResponse getGeneOrthologDiseaseAssociations(openapisdk.models.operations.GetGeneOrthologDiseaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/ortholog/diseases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneOrthologDiseaseAssociationsResponse res = new openapisdk.models.operations.GetGeneOrthologDiseaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneOrthologPhenotypeAssociations - Return phenotypes associated with orthologs for a gene
    **/
    public openapisdk.models.operations.GetGeneOrthologPhenotypeAssociationsResponse getGeneOrthologPhenotypeAssociations(openapisdk.models.operations.GetGeneOrthologPhenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/ortholog/phenotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneOrthologPhenotypeAssociationsResponse res = new openapisdk.models.operations.GetGeneOrthologPhenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenePathwayAssociations - Returns pathways associated with gene
    **/
    public openapisdk.models.operations.GetGenePathwayAssociationsResponse getGenePathwayAssociations(openapisdk.models.operations.GetGenePathwayAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/pathways", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenePathwayAssociationsResponse res = new openapisdk.models.operations.GetGenePathwayAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenePhenotypeAssociations - Returns phenotypes associated with gene
    **/
    public openapisdk.models.operations.GetGenePhenotypeAssociationsResponse getGenePhenotypeAssociations(openapisdk.models.operations.GetGenePhenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/phenotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenePhenotypeAssociationsResponse res = new openapisdk.models.operations.GetGenePhenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenePublicationAssociations - Returns publications associated with a gene
    **/
    public openapisdk.models.operations.GetGenePublicationAssociationsResponse getGenePublicationAssociations(openapisdk.models.operations.GetGenePublicationAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/publications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenePublicationAssociationsResponse res = new openapisdk.models.operations.GetGenePublicationAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGeneVariantAssociations - Returns variants associated with a gene
    **/
    public openapisdk.models.operations.GetGeneVariantAssociationsResponse getGeneVariantAssociations(openapisdk.models.operations.GetGeneVariantAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/gene/{id}/variants", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGeneVariantAssociationsResponse res = new openapisdk.models.operations.GetGeneVariantAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenericAssociations - Returns associations for an entity regardless of the type
    **/
    public openapisdk.models.operations.GetGenericAssociationsResponse getGenericAssociations(openapisdk.models.operations.GetGenericAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/{id}/associations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenericAssociationsResponse res = new openapisdk.models.operations.GetGenericAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenericObject - Returns basic info on object of any type
    **/
    public openapisdk.models.operations.GetGenericObjectResponse getGenericObject(openapisdk.models.operations.GetGenericObjectRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenericObjectResponse res = new openapisdk.models.operations.GetGenericObjectResponse() {{
            bioObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BioObject out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BioObject.class);
                res.bioObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenericObjectByType - Return basic info on an object for a given type
    **/
    public openapisdk.models.operations.GetGenericObjectByTypeResponse getGenericObjectByType(openapisdk.models.operations.GetGenericObjectByTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/{type}/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenericObjectByTypeResponse res = new openapisdk.models.operations.GetGenericObjectByTypeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getGenotypeCaseAssociations - Returns cases associated with a genotype
    **/
    public openapisdk.models.operations.GetGenotypeCaseAssociationsResponse getGenotypeCaseAssociations(openapisdk.models.operations.GetGenotypeCaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/genotype/{id}/cases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenotypeCaseAssociationsResponse res = new openapisdk.models.operations.GetGenotypeCaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenotypeDiseaseAssociations - Returns diseases associated with a genotype
    **/
    public openapisdk.models.operations.GetGenotypeDiseaseAssociationsResponse getGenotypeDiseaseAssociations(openapisdk.models.operations.GetGenotypeDiseaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/genotype/{id}/diseases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenotypeDiseaseAssociationsResponse res = new openapisdk.models.operations.GetGenotypeDiseaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenotypeGeneAssociations - Returns genes associated with a genotype
    **/
    public openapisdk.models.operations.GetGenotypeGeneAssociationsResponse getGenotypeGeneAssociations(openapisdk.models.operations.GetGenotypeGeneAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/genotype/{id}/genes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenotypeGeneAssociationsResponse res = new openapisdk.models.operations.GetGenotypeGeneAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenotypeGenotypeAssociations - Returns genotypes-genotype associations
     *
     * Genotypes may be related to one another according to the GENO model
    **/
    public openapisdk.models.operations.GetGenotypeGenotypeAssociationsResponse getGenotypeGenotypeAssociations(openapisdk.models.operations.GetGenotypeGenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/genotype/{id}/genotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenotypeGenotypeAssociationsResponse res = new openapisdk.models.operations.GetGenotypeGenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenotypeModelAssociations - Returns models associated with a genotype
    **/
    public openapisdk.models.operations.GetGenotypeModelAssociationsResponse getGenotypeModelAssociations(openapisdk.models.operations.GetGenotypeModelAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/genotype/{id}/models", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenotypeModelAssociationsResponse res = new openapisdk.models.operations.GetGenotypeModelAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenotypePhenotypeAssociations - Returns phenotypes associated with a genotype
    **/
    public openapisdk.models.operations.GetGenotypePhenotypeAssociationsResponse getGenotypePhenotypeAssociations(openapisdk.models.operations.GetGenotypePhenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/genotype/{id}/phenotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenotypePhenotypeAssociationsResponse res = new openapisdk.models.operations.GetGenotypePhenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenotypePublicationAssociations - Returns publications associated with a genotype
    **/
    public openapisdk.models.operations.GetGenotypePublicationAssociationsResponse getGenotypePublicationAssociations(openapisdk.models.operations.GetGenotypePublicationAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/genotype/{id}/publications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenotypePublicationAssociationsResponse res = new openapisdk.models.operations.GetGenotypePublicationAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGenotypeVariantAssociations - Returns genotypes-variant associations
    **/
    public openapisdk.models.operations.GetGenotypeVariantAssociationsResponse getGenotypeVariantAssociations(openapisdk.models.operations.GetGenotypeVariantAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/genotype/{id}/variants", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGenotypeVariantAssociationsResponse res = new openapisdk.models.operations.GetGenotypeVariantAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGotermGeneAssociations - Returns associations to GO terms for a gene
    **/
    public openapisdk.models.operations.GetGotermGeneAssociationsResponse getGotermGeneAssociations(openapisdk.models.operations.GetGotermGeneAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/goterm/{id}/genes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGotermGeneAssociationsResponse res = new openapisdk.models.operations.GetGotermGeneAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModelCaseAssociations - Returns cases associated with a model
    **/
    public openapisdk.models.operations.GetModelCaseAssociationsResponse getModelCaseAssociations(openapisdk.models.operations.GetModelCaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/model/{id}/cases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetModelCaseAssociationsResponse res = new openapisdk.models.operations.GetModelCaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModelDiseaseAssociations - Returns diseases associated with a model
    **/
    public openapisdk.models.operations.GetModelDiseaseAssociationsResponse getModelDiseaseAssociations(openapisdk.models.operations.GetModelDiseaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/model/{id}/diseases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetModelDiseaseAssociationsResponse res = new openapisdk.models.operations.GetModelDiseaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModelGeneAssociations - Returns genes associated with a model
    **/
    public openapisdk.models.operations.GetModelGeneAssociationsResponse getModelGeneAssociations(openapisdk.models.operations.GetModelGeneAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/model/{id}/genes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetModelGeneAssociationsResponse res = new openapisdk.models.operations.GetModelGeneAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModelGenotypeAssociations - Returns genotypes associated with a model
    **/
    public openapisdk.models.operations.GetModelGenotypeAssociationsResponse getModelGenotypeAssociations(openapisdk.models.operations.GetModelGenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/model/{id}/genotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetModelGenotypeAssociationsResponse res = new openapisdk.models.operations.GetModelGenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModelPhenotypeAssociations - Returns phenotypes associated with a model
    **/
    public openapisdk.models.operations.GetModelPhenotypeAssociationsResponse getModelPhenotypeAssociations(openapisdk.models.operations.GetModelPhenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/model/{id}/phenotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetModelPhenotypeAssociationsResponse res = new openapisdk.models.operations.GetModelPhenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModelPublicationAssociations - Returns publications associated with a model
    **/
    public openapisdk.models.operations.GetModelPublicationAssociationsResponse getModelPublicationAssociations(openapisdk.models.operations.GetModelPublicationAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/model/{id}/publications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetModelPublicationAssociationsResponse res = new openapisdk.models.operations.GetModelPublicationAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getModelVariantAssociations - Returns variants associated with a model
    **/
    public openapisdk.models.operations.GetModelVariantAssociationsResponse getModelVariantAssociations(openapisdk.models.operations.GetModelVariantAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/model/{id}/variants", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetModelVariantAssociationsResponse res = new openapisdk.models.operations.GetModelVariantAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPathwayDiseaseAssociations - Returns diseases associated with a pathway
    **/
    public openapisdk.models.operations.GetPathwayDiseaseAssociationsResponse getPathwayDiseaseAssociations(openapisdk.models.operations.GetPathwayDiseaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/pathway/{id}/diseases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPathwayDiseaseAssociationsResponse res = new openapisdk.models.operations.GetPathwayDiseaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPathwayGeneAssociations - Returns genes associated with a pathway
    **/
    public openapisdk.models.operations.GetPathwayGeneAssociationsResponse getPathwayGeneAssociations(openapisdk.models.operations.GetPathwayGeneAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/pathway/{id}/genes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPathwayGeneAssociationsResponse res = new openapisdk.models.operations.GetPathwayGeneAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPathwayPhenotypeAssociations - Returns phenotypes associated with a pathway
    **/
    public openapisdk.models.operations.GetPathwayPhenotypeAssociationsResponse getPathwayPhenotypeAssociations(openapisdk.models.operations.GetPathwayPhenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/pathway/{id}/phenotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPathwayPhenotypeAssociationsResponse res = new openapisdk.models.operations.GetPathwayPhenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPhenotypeAnatomyAssociations - Returns anatomical entities associated with a phenotype
     *
     * Example IDs:
     * 
     *  * MP:0008521 abnormal Bowman membrane
    **/
    public openapisdk.models.operations.GetPhenotypeAnatomyAssociationsResponse getPhenotypeAnatomyAssociations(openapisdk.models.operations.GetPhenotypeAnatomyAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/phenotype/{id}/anatomy", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPhenotypeAnatomyAssociationsResponse res = new openapisdk.models.operations.GetPhenotypeAnatomyAssociationsResponse() {{
            namedObjects = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NamedObject[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NamedObject[].class);
                res.namedObjects = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPhenotypeCaseAssociations - Returns cases associated with a phenotype
    **/
    public openapisdk.models.operations.GetPhenotypeCaseAssociationsResponse getPhenotypeCaseAssociations(openapisdk.models.operations.GetPhenotypeCaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/phenotype/{id}/cases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPhenotypeCaseAssociationsResponse res = new openapisdk.models.operations.GetPhenotypeCaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPhenotypeDiseaseAssociations - Returns diseases associated with a phenotype
    **/
    public openapisdk.models.operations.GetPhenotypeDiseaseAssociationsResponse getPhenotypeDiseaseAssociations(openapisdk.models.operations.GetPhenotypeDiseaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/phenotype/{id}/diseases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPhenotypeDiseaseAssociationsResponse res = new openapisdk.models.operations.GetPhenotypeDiseaseAssociationsResponse() {{
            d2PAssociationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.D2PAssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.D2PAssociationResults.class);
                res.d2PAssociationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPhenotypeGeneAssociations - Returns genes associated with a phenotype
    **/
    public openapisdk.models.operations.GetPhenotypeGeneAssociationsResponse getPhenotypeGeneAssociations(openapisdk.models.operations.GetPhenotypeGeneAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/phenotype/{id}/genes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPhenotypeGeneAssociationsResponse res = new openapisdk.models.operations.GetPhenotypeGeneAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPhenotypeGeneByTaxonAssociations - Returns gene IDs for all genes associated with a given phenotype, filtered by taxon
     *
     * For example, MP:0001569 + NCBITaxon:10090 (mouse)
    **/
    public openapisdk.models.operations.GetPhenotypeGeneByTaxonAssociationsResponse getPhenotypeGeneByTaxonAssociations(openapisdk.models.operations.GetPhenotypeGeneByTaxonAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/phenotype/{id}/gene/{taxid}/ids", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPhenotypeGeneByTaxonAssociationsResponse res = new openapisdk.models.operations.GetPhenotypeGeneByTaxonAssociationsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getPhenotypeGenotypeAssociations - Returns genotypes associated with a phenotype
    **/
    public openapisdk.models.operations.GetPhenotypeGenotypeAssociationsResponse getPhenotypeGenotypeAssociations(openapisdk.models.operations.GetPhenotypeGenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/phenotype/{id}/genotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPhenotypeGenotypeAssociationsResponse res = new openapisdk.models.operations.GetPhenotypeGenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPhenotypePathwayAssociations - Returns pathways associated with a phenotype
    **/
    public openapisdk.models.operations.GetPhenotypePathwayAssociationsResponse getPhenotypePathwayAssociations(openapisdk.models.operations.GetPhenotypePathwayAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/phenotype/{id}/pathways", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPhenotypePathwayAssociationsResponse res = new openapisdk.models.operations.GetPhenotypePathwayAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPhenotypePublicationAssociations - Returns publications associated with a phenotype
    **/
    public openapisdk.models.operations.GetPhenotypePublicationAssociationsResponse getPhenotypePublicationAssociations(openapisdk.models.operations.GetPhenotypePublicationAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/phenotype/{id}/publications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPhenotypePublicationAssociationsResponse res = new openapisdk.models.operations.GetPhenotypePublicationAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPhenotypeVariantAssociations - Returns variants associated with a phenotype
    **/
    public openapisdk.models.operations.GetPhenotypeVariantAssociationsResponse getPhenotypeVariantAssociations(openapisdk.models.operations.GetPhenotypeVariantAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/phenotype/{id}/variants", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPhenotypeVariantAssociationsResponse res = new openapisdk.models.operations.GetPhenotypeVariantAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPublicationDiseaseAssociations - Returns diseases associated with a publication
    **/
    public openapisdk.models.operations.GetPublicationDiseaseAssociationsResponse getPublicationDiseaseAssociations(openapisdk.models.operations.GetPublicationDiseaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/publication/{id}/diseases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPublicationDiseaseAssociationsResponse res = new openapisdk.models.operations.GetPublicationDiseaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPublicationGeneAssociations - Returns genes associated with a publication
    **/
    public openapisdk.models.operations.GetPublicationGeneAssociationsResponse getPublicationGeneAssociations(openapisdk.models.operations.GetPublicationGeneAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/publication/{id}/genes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPublicationGeneAssociationsResponse res = new openapisdk.models.operations.GetPublicationGeneAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPublicationGenotypeAssociations - Returns genotypes associated with a publication
    **/
    public openapisdk.models.operations.GetPublicationGenotypeAssociationsResponse getPublicationGenotypeAssociations(openapisdk.models.operations.GetPublicationGenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/publication/{id}/genotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPublicationGenotypeAssociationsResponse res = new openapisdk.models.operations.GetPublicationGenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPublicationModelAssociations - Returns models associated with a publication
    **/
    public openapisdk.models.operations.GetPublicationModelAssociationsResponse getPublicationModelAssociations(openapisdk.models.operations.GetPublicationModelAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/publication/{id}/models", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPublicationModelAssociationsResponse res = new openapisdk.models.operations.GetPublicationModelAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPublicationPhenotypeAssociations - Returns phenotypes associated with a publication
    **/
    public openapisdk.models.operations.GetPublicationPhenotypeAssociationsResponse getPublicationPhenotypeAssociations(openapisdk.models.operations.GetPublicationPhenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/publication/{id}/phenotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPublicationPhenotypeAssociationsResponse res = new openapisdk.models.operations.GetPublicationPhenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPublicationVariantAssociations - Returns variants associated with a publication
    **/
    public openapisdk.models.operations.GetPublicationVariantAssociationsResponse getPublicationVariantAssociations(openapisdk.models.operations.GetPublicationVariantAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/publication/{id}/variants", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPublicationVariantAssociationsResponse res = new openapisdk.models.operations.GetPublicationVariantAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSubstanceParticipantInAssociations - Returns associations between an activity and process and the specified substance
     *
     * Examples relationships:
     * 
     *  * substance is a metabolite of a process
     *  * substance is synthesized by a process
     *  * substance is modified by an activity
     *  * substance elicits a response program/pathway
     *  * substance is transported by activity or pathway
     * 
     * For example, CHEBI:40036 (amitrole)
    **/
    public openapisdk.models.operations.GetSubstanceParticipantInAssociationsResponse getSubstanceParticipantInAssociations(openapisdk.models.operations.GetSubstanceParticipantInAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/substance/{id}/participant_in", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSubstanceParticipantInAssociationsResponse res = new openapisdk.models.operations.GetSubstanceParticipantInAssociationsResponse() {{
            associations = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Association[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Association[].class);
                res.associations = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSubstanceRoleAssociations - Returns associations between given drug and roles
     *
     * Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)
    **/
    public openapisdk.models.operations.GetSubstanceRoleAssociationsResponse getSubstanceRoleAssociations(openapisdk.models.operations.GetSubstanceRoleAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/substance/{id}/roles", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSubstanceRoleAssociationsResponse res = new openapisdk.models.operations.GetSubstanceRoleAssociationsResponse() {{
            associations = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Association[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Association[].class);
                res.associations = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSubstanceTreatsAssociations - Returns substances associated with a disease
     *
     * e.g. drugs or small molecules used to treat
    **/
    public openapisdk.models.operations.GetSubstanceTreatsAssociationsResponse getSubstanceTreatsAssociations(openapisdk.models.operations.GetSubstanceTreatsAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/substance/{id}/treats", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSubstanceTreatsAssociationsResponse res = new openapisdk.models.operations.GetSubstanceTreatsAssociationsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getVariantCaseAssociations - Returns cases associated with a variant
    **/
    public openapisdk.models.operations.GetVariantCaseAssociationsResponse getVariantCaseAssociations(openapisdk.models.operations.GetVariantCaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/variant/{id}/cases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVariantCaseAssociationsResponse res = new openapisdk.models.operations.GetVariantCaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVariantDiseaseAssociations - Returns diseases associated with a variant
    **/
    public openapisdk.models.operations.GetVariantDiseaseAssociationsResponse getVariantDiseaseAssociations(openapisdk.models.operations.GetVariantDiseaseAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/variant/{id}/diseases", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVariantDiseaseAssociationsResponse res = new openapisdk.models.operations.GetVariantDiseaseAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVariantGeneAssociations - Returns genes associated with a variant
    **/
    public openapisdk.models.operations.GetVariantGeneAssociationsResponse getVariantGeneAssociations(openapisdk.models.operations.GetVariantGeneAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/variant/{id}/genes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVariantGeneAssociationsResponse res = new openapisdk.models.operations.GetVariantGeneAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVariantGenotypeAssociations - Returns genotypes associated with a variant
    **/
    public openapisdk.models.operations.GetVariantGenotypeAssociationsResponse getVariantGenotypeAssociations(openapisdk.models.operations.GetVariantGenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/variant/{id}/genotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVariantGenotypeAssociationsResponse res = new openapisdk.models.operations.GetVariantGenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVariantModelAssociations - Returns models associated with a variant
    **/
    public openapisdk.models.operations.GetVariantModelAssociationsResponse getVariantModelAssociations(openapisdk.models.operations.GetVariantModelAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/variant/{id}/models", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVariantModelAssociationsResponse res = new openapisdk.models.operations.GetVariantModelAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVariantPhenotypeAssociations - Returns phenotypes associated with a variant
    **/
    public openapisdk.models.operations.GetVariantPhenotypeAssociationsResponse getVariantPhenotypeAssociations(openapisdk.models.operations.GetVariantPhenotypeAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/variant/{id}/phenotypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVariantPhenotypeAssociationsResponse res = new openapisdk.models.operations.GetVariantPhenotypeAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
	
    /**
     * getVariantPublicationAssociations - Returns publications associated with a variant
    **/
    public openapisdk.models.operations.GetVariantPublicationAssociationsResponse getVariantPublicationAssociations(openapisdk.models.operations.GetVariantPublicationAssociationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bioentity/variant/{id}/publications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetVariantPublicationAssociationsResponse res = new openapisdk.models.operations.GetVariantPublicationAssociationsResponse() {{
            associationResults = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssociationResults out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssociationResults.class);
                res.associationResults = out;
            }
        }

        return res;
    }
	
}