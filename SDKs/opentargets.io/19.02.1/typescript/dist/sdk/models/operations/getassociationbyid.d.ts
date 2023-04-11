import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAssociationByIdRequest extends SpeakeasyBase {
    /**
     * An association ID usually in the form of `TARGET_ID-DISEASE_ID`.
     */
    id: string;
}
export declare class GetAssociationByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
