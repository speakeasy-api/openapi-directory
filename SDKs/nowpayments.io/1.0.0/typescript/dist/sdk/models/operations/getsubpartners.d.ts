import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSubPartnersRequest extends SpeakeasyBase {
    /**
     * int or array of int (optional)
     */
    id?: string;
    /**
     * (optional) default 10
     */
    limit?: string;
    /**
     * (optional) default 0
     */
    offset?: string;
    /**
     * ASC / DESC (optional) default ASC
     */
    order?: string;
}
export declare class GetSubPartnersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
