import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum UpcomingDfsSlateOwnershipProjectionsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class UpcomingDfsSlateOwnershipProjectionsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: UpcomingDfsSlateOwnershipProjectionsFormatEnum;
}
export declare class UpcomingDfsSlateOwnershipProjectionsResponse extends SpeakeasyBase {
    contentType: string;
    dfsSlateWithOwnershipProjections?: shared.DfsSlateWithOwnershipProjection[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
