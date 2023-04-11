import { SpeakeasyBase } from "../../../internal/utils";
import { AdminCorpus } from "./admincorpus";
import { ComvectaraStatus } from "./comvectarastatus";
/**
 * A successful response.
 */
export declare class AdminListCorporaResponse extends SpeakeasyBase {
    corpus?: AdminCorpus[];
    /**
     * A key that is passed into a subsequent result in order to
     *
     * @remarks
     * retrieve the next page of results.
     */
    pageKey?: string;
    status?: ComvectaraStatus;
}
