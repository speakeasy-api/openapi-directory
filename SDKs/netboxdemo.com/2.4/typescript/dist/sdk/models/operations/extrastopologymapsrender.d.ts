import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasTopologyMapsRenderRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this topology map.
     */
    id: number;
}
export declare class ExtrasTopologyMapsRenderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    topologyMap?: shared.TopologyMap;
}
