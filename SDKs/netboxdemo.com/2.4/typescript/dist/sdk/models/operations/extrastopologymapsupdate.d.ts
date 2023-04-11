import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasTopologyMapsUpdateRequest extends SpeakeasyBase {
    writableTopologyMapInput: shared.WritableTopologyMapInput;
    /**
     * A unique integer value identifying this topology map.
     */
    id: number;
}
export declare class ExtrasTopologyMapsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    topologyMap?: shared.TopologyMap;
}
