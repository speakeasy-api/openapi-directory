import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum DfsSlateOwnershipProjectionsBySlateidFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class DfsSlateOwnershipProjectionsBySlateidRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: DfsSlateOwnershipProjectionsBySlateidFormatEnum;
    /**
     * SlateID of the DFS Slate you wish to get ownership projections for. Will have an empty SlateOwnershipProjections if this slate was not projected
     */
    slateId: string;
}
export declare class DfsSlateOwnershipProjectionsBySlateidResponse extends SpeakeasyBase {
    contentType: string;
    dfsSlateWithOwnershipProjection?: shared.DfsSlateWithOwnershipProjection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
