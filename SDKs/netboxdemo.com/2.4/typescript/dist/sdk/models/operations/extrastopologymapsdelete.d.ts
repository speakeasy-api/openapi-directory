import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExtrasTopologyMapsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this topology map.
     */
    id: number;
}
export declare class ExtrasTopologyMapsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
