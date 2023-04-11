import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOneGroupRequest extends SpeakeasyBase {
    /**
     * The ID of the group.
     */
    groupId: string;
}
export declare class GetOneGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
