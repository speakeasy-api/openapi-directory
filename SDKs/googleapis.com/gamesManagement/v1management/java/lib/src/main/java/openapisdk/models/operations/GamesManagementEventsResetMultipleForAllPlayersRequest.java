package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesManagementEventsResetMultipleForAllPlayersRequest {
    public GamesManagementEventsResetMultipleForAllPlayersQueryParams queryParams;
    public GamesManagementEventsResetMultipleForAllPlayersRequest withQueryParams(GamesManagementEventsResetMultipleForAllPlayersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EventsResetMultipleForAllRequest request;
    public GamesManagementEventsResetMultipleForAllPlayersRequest withRequest(openapisdk.models.shared.EventsResetMultipleForAllRequest request) {
        this.request = request;
        return this;
    }
    public GamesManagementEventsResetMultipleForAllPlayersSecurity security;
    public GamesManagementEventsResetMultipleForAllPlayersRequest withSecurity(GamesManagementEventsResetMultipleForAllPlayersSecurity security) {
        this.security = security;
        return this;
    }
}