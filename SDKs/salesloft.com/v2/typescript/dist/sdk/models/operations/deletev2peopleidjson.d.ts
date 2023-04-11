import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteV2PeopleIdJsonRequest extends SpeakeasyBase {
    /**
     * Person id
     */
    id: string;
}
export declare class DeleteV2PeopleIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
