import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimManufacturersUpdateRequest extends SpeakeasyBase {
    manufacturerInput: shared.ManufacturerInput;
    /**
     * A unique integer value identifying this manufacturer.
     */
    id: number;
}
export declare class DcimManufacturersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    manufacturer?: shared.Manufacturer;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
