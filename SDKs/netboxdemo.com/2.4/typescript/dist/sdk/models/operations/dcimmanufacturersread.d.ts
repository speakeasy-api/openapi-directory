import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimManufacturersReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this manufacturer.
     */
    id: number;
}
export declare class DcimManufacturersReadResponse extends SpeakeasyBase {
    contentType: string;
    manufacturer?: shared.Manufacturer;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
