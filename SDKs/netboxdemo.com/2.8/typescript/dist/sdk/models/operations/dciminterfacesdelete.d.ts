import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimInterfacesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this interface.
     */
    id: number;
}
export declare class DcimInterfacesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
