import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationWriteV1 } from "./applicationwritev1";
import { QuotePreviewV1 } from "./quotepreviewv1";
/**
 * A submission is a set of information submitted by a producer to institutions in order to get quotes.
 */
export declare class SubmissionV1 extends SpeakeasyBase {
    /**
     * An application is a set of information submitted by a producer to institutions in order to get quotes.
     */
    application: ApplicationWriteV1;
    id: string;
    producerId: string;
    quotePreviews: QuotePreviewV1[];
}
