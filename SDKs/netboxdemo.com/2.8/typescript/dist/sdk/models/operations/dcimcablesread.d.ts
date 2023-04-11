import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimCablesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this cable.
     */
    id: number;
}
export declare class DcimCablesReadResponse extends SpeakeasyBase {
    cable?: shared.Cable;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
