import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOwnershipOwnershipIdRequest extends SpeakeasyBase {
    /**
     * The id belonging to the ownership record
     */
    ownershipId: string;
}
export declare class GetOwnershipOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
