import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesNodeAddonUpdateRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
    /**
     * The unique identifier of the addon.
     */
    provider: string;
}
export declare class NodesNodeAddonUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
