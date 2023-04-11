import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchHpoEntitiesRequest extends SpeakeasyBase {
    /**
     * anatomical system id
     */
    anatomicalSystem?: string;
    /**
     * anatomical system label
     */
    anatomicalSystemLabel?: string;
    /**
     * highlight class
     */
    highlightClass?: string;
    /**
     * phenotype group id
     */
    phenotypeGroup?: string;
    /**
     * phenotype group label
     */
    phenotypeGroupLabel?: string;
    /**
     * number of rows
     */
    rows?: number;
    /**
     * row number to start from
     */
    start?: string;
    /**
     * search string, e.g. muscle atrophy, frequent infections
     */
    term: string;
}
export declare class GetSearchHpoEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    layResults?: shared.LayResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
