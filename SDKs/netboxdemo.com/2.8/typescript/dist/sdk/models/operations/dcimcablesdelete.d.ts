import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimCablesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this cable.
     */
    id: number;
}
export declare class DcimCablesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
