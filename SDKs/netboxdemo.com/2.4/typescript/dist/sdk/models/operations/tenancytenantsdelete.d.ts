import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TenancyTenantsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this tenant.
     */
    id: number;
}
export declare class TenancyTenantsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
