import { SpeakeasyBase } from "../../../internal/utils";
import { EmailHistoryResource } from "./emailhistoryresource";
import { FetchMetaResponse } from "./fetchmetaresponse";
/**
 * OK
 */
export declare class FetchEmailHistoryResponse extends SpeakeasyBase {
    data: EmailHistoryResource;
    meta?: FetchMetaResponse;
}
