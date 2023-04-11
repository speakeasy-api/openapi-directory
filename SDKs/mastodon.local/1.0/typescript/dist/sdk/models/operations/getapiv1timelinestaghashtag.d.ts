import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1TimelinesTagHashtagRequest extends SpeakeasyBase {
    /**
     * Content of a `#hashtag``, not including `#` symbol..
     */
    hashtag: string;
    /**
     * Max number of results to return. Defaults to 20.
     */
    limit?: number;
    /**
     * Show only local statuses? Defaults to false.
     */
    local?: boolean;
    /**
     * Return results older than ID
     */
    maxId?: string;
    /**
     * Return results immediately newer than ID
     */
    minId?: string;
    /**
     * Show only statuses with media attached? Defaults to false..
     */
    onlyMedia?: boolean;
    /**
     * Show only local statuses? Defaults to false.
     */
    remote?: boolean;
    /**
     * Return results newer than ID
     */
    sinceId?: string;
}
export declare class GetApiV1TimelinesTagHashtagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get statuses.
     */
    statuses?: shared.Status[];
}
