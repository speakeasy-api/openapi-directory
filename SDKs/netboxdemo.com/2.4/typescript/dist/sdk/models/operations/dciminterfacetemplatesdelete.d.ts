import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimInterfaceTemplatesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this interface template.
     */
    id: number;
}
export declare class DcimInterfaceTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
