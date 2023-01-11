package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeApiKeyHeader apiKeyHeader;
    public Security withApiKeyHeader(SchemeApiKeyHeader apiKeyHeader) {
        this.apiKeyHeader = apiKeyHeader;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeApiKeyQuery apiKeyQuery;
    public Security withApiKeyQuery(SchemeApiKeyQuery apiKeyQuery) {
        this.apiKeyQuery = apiKeyQuery;
        return this;
    }
}