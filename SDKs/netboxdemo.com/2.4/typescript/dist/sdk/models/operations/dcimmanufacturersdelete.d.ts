import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimManufacturersDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this manufacturer.
     */
    id: number;
}
export declare class DcimManufacturersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
