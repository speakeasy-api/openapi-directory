import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExtrasExportTemplatesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this export template.
     */
    id: number;
}
export declare class ExtrasExportTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
