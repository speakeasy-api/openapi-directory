import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimSitesPartialUpdateRequest extends SpeakeasyBase {
    writableSiteInput: shared.WritableSiteInput;
    /**
     * A unique integer value identifying this site.
     */
    id: number;
}
export declare class DcimSitesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
