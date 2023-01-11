import requests
from sdk.models import operations
from . import utils

class Statistics:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_active_object_count_using_get(self, request: operations.GetActiveObjectCountUsingGetRequest) -> operations.GetActiveObjectCountUsingGetResponse:
        r"""Count of active objects by type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/activeObject/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveObjectCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_active_object_diff_using_get(self, request: operations.GetActiveObjectDiffUsingGetRequest) -> operations.GetActiveObjectDiffUsingGetResponse:
        r"""Count difference of active objects, by type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/activeObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveObjectDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_type_count_using_get(self, request: operations.GetGeneTypeCountUsingGetRequest) -> operations.GetGeneTypeCountUsingGetResponse:
        r"""Count of gene types, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/geneType/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneTypeCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_type_diff_using_get(self, request: operations.GetGeneTypeDiffUsingGetRequest) -> operations.GetGeneTypeDiffUsingGetResponse:
        r"""Count difference of gene types, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/geneType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneTypeDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_object_status_count_using_get(self, request: operations.GetObjectStatusCountUsingGetRequest) -> operations.GetObjectStatusCountUsingGetResponse:
        r"""Count of objects with given status, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/objectStatus/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStatusCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_object_status_diff_using_get(self, request: operations.GetObjectStatusDiffUsingGetRequest) -> operations.GetObjectStatusDiffUsingGetResponse:
        r"""Count difference of objects with given status, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/objectStatus/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStatusDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_ref_seq_count_using_get(self, request: operations.GetObjectsWithRefSeqCountUsingGetRequest) -> operations.GetObjectsWithRefSeqCountUsingGetResponse:
        r"""Count of objects with reference sequence(s), by object type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/objectWithRefSeq/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithRefSeqCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_ref_seq_diff_using_get(self, request: operations.GetObjectsWithRefSeqDiffUsingGetRequest) -> operations.GetObjectsWithRefSeqDiffUsingGetResponse:
        r"""Count difference of objects with reference sequence(s), by object type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/objectWithRefSeq/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithRefSeqDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_reference_count_using_get(self, request: operations.GetObjectsWithReferenceCountUsingGetRequest) -> operations.GetObjectsWithReferenceCountUsingGetResponse:
        r"""Count of objects with reference, by object type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/objectWithReference/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithReferenceCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_reference_diff_using_get(self, request: operations.GetObjectsWithReferenceDiffUsingGetRequest) -> operations.GetObjectsWithReferenceDiffUsingGetResponse:
        r"""Count difference of objects with reference, by object type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/objectWithReference/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithReferenceDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_xd_bs_count_using_get(self, request: operations.GetObjectsWithXdBsCountUsingGetRequest) -> operations.GetObjectsWithXdBsCountUsingGetResponse:
        r"""Count of objects with external database ids, by database id, for specified species, object type and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/objectWithXdb/{speciesTypeKey}/{objectKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithXdBsCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_xd_bs_diff_using_get(self, request: operations.GetObjectsWithXdBsDiffUsingGetRequest) -> operations.GetObjectsWithXdBsDiffUsingGetResponse:
        r"""Count difference of objects with external database ids, by database id, for specified species, object type and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/objectWithXdb/{speciesTypeKey}/{objectKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithXdBsDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_protein_interaction_count_using_get(self, request: operations.GetProteinInteractionCountUsingGetRequest) -> operations.GetProteinInteractionCountUsingGetResponse:
        r"""Count of protein interactions, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/proteinInteraction/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProteinInteractionCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_protein_interaction_diff_using_get(self, request: operations.GetProteinInteractionDiffUsingGetRequest) -> operations.GetProteinInteractionDiffUsingGetResponse:
        r"""Count difference of protein interactions, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/proteinInteraction/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProteinInteractionDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_qtl_inheritance_type_count_using_get(self, request: operations.GetQtlInheritanceTypeCountUsingGetRequest) -> operations.GetQtlInheritanceTypeCountUsingGetResponse:
        r"""Count of strains, by qtl inheritance type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/qtlInheritanceType/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQtlInheritanceTypeCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_qtl_inheritance_type_diff_using_get(self, request: operations.GetQtlInheritanceTypeDiffUsingGetRequest) -> operations.GetQtlInheritanceTypeDiffUsingGetResponse:
        r"""Count difference of strains, by qtl inheritance type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/qtlInheritanceType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQtlInheritanceTypeDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_retired_object_count_using_get(self, request: operations.GetRetiredObjectCountUsingGetRequest) -> operations.GetRetiredObjectCountUsingGetResponse:
        r"""Count of retired objects by type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/retiredObject/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRetiredObjectCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_retired_object_diff_using_get(self, request: operations.GetRetiredObjectDiffUsingGetRequest) -> operations.GetRetiredObjectDiffUsingGetResponse:
        r"""Count difference of retired objects, by type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/retiredObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRetiredObjectDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_strain_type_count_using_get(self, request: operations.GetStrainTypeCountUsingGetRequest) -> operations.GetStrainTypeCountUsingGetResponse:
        r"""Count of strain types, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/strainType/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStrainTypeCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_strain_type_diff_using_get(self, request: operations.GetStrainTypeDiffUsingGetRequest) -> operations.GetStrainTypeDiffUsingGetResponse:
        r"""Count difference of strain types, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/strainType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStrainTypeDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_term_stats_using_get(self, request: operations.GetTermStatsUsingGetRequest) -> operations.GetTermStatsUsingGetResponse:
        r"""getTermStats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/term/{accId}/{filterAccId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTermStatsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_withdrawn_object_count_using_get(self, request: operations.GetWithdrawnObjectCountUsingGetRequest) -> operations.GetWithdrawnObjectCountUsingGetResponse:
        r"""Count of withdrawn objects by type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/withdrawnObject/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWithdrawnObjectCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_withdrawn_object_diff_using_get(self, request: operations.GetWithdrawnObjectDiffUsingGetRequest) -> operations.GetWithdrawnObjectDiffUsingGetResponse:
        r"""Count difference of withdrawn objects, by type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/withdrawnObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWithdrawnObjectDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_xdbs_count_using_get(self, request: operations.GetXdbsCountUsingGetRequest) -> operations.GetXdbsCountUsingGetResponse:
        r"""Count of external database ids, for specied species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/xdb/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetXdbsCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_xdbs_diff_using_get(self, request: operations.GetXdbsDiffUsingGetRequest) -> operations.GetXdbsDiffUsingGetResponse:
        r"""Count difference of external database ids, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/xdb/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetXdbsDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    