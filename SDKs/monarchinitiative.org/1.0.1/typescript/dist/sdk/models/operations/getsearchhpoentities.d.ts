import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchHpoEntitiesPathParams extends SpeakeasyBase {
    term: string;
}
export declare class GetSearchHpoEntitiesQueryParams extends SpeakeasyBase {
    anatomicalSystem?: string;
    anatomicalSystemLabel?: string;
    highlightClass?: string;
    phenotypeGroup?: string;
    phenotypeGroupLabel?: string;
    rows?: number;
    start?: string;
}
export declare class GetSearchHpoEntitiesRequest extends SpeakeasyBase {
    pathParams: GetSearchHpoEntitiesPathParams;
    queryParams: GetSearchHpoEntitiesQueryParams;
}
export declare class GetSearchHpoEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    layResults?: shared.LayResults;
    statusCode: number;
}
