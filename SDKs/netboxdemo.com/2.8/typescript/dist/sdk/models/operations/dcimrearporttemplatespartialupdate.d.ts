import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRearPortTemplatesPartialUpdateRequest extends SpeakeasyBase {
    writableRearPortTemplateInput: shared.WritableRearPortTemplateInput;
    /**
     * A unique integer value identifying this rear port template.
     */
    id: number;
}
export declare class DcimRearPortTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rearPortTemplate?: shared.RearPortTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
