import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
 *
 * @remarks
 *
 */
export declare class GetTargetsAllNeedsAttentionPie200ApplicationJson0 extends SpeakeasyBase {
    /**
     * needing attention
     */
    zero?: string;
    /**
     * Number of targets
     */
    one?: number;
    /**
     * needs_atention
     */
    two?: string;
}
/**
 * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
 *
 * @remarks
 *
 */
export declare class GetTargetsAllNeedsAttentionPie200ApplicationJson1 extends SpeakeasyBase {
    /**
     * no issues found
     */
    zero?: string;
    /**
     * Number of targets
     */
    one?: number;
    /**
     * no_issues_found
     */
    two?: string;
}
/**
 * Success
 */
export declare class GetTargetsAllNeedsAttentionPie200ApplicationJSON extends SpeakeasyBase {
    /**
     * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
     *
     * @remarks
     *
     */
    zero?: GetTargetsAllNeedsAttentionPie200ApplicationJson0;
    /**
     * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
     *
     * @remarks
     *
     */
    one?: GetTargetsAllNeedsAttentionPie200ApplicationJson1;
}
export declare class GetTargetsAllNeedsAttentionPieResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getTargetsAllNeedsAttentionPie200ApplicationJSONObject?: GetTargetsAllNeedsAttentionPie200ApplicationJSON;
}
