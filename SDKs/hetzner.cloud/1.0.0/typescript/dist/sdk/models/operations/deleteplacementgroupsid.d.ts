import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePlacementGroupsIdRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: number;
}
export declare class DeletePlacementGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
