import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsAllNeedsAttentionTop200ApplicationJSON extends SpeakeasyBase {
    /**
     * Number of high severity findings
     */
    highs?: number;
    /**
     * Target id
     */
    id?: string;
    /**
     * Number of low severity findings
     */
    lows?: number;
    /**
     * Number of medium severity findings
     */
    mediums?: number;
    /**
     * Name
     */
    name?: string;
    /**
     * Target's site URL
     */
    url?: string;
}
export declare class GetTargetsAllNeedsAttentionTopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getTargetsAllNeedsAttentionTop200ApplicationJSONObjects?: GetTargetsAllNeedsAttentionTop200ApplicationJSON[];
}
