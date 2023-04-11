import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { LawReference } from "./lawreference";
import { LawTopics } from "./lawtopics";
import { LawType } from "./lawtype";
import { Poc } from "./poc";
/**
 * This is a Law
 */
export declare class Law extends SpeakeasyBase {
    /**
     * The agency with primary responsibility for federal incentives/regulations.
     */
    agency?: string;
    /**
     * The date the incentive/law/regulation was updated through new legislation or rulemaking.
     */
    amendedDate?: Date;
    /**
     * The date that an incentive/law/regulation is no longer relevant to the database. This may include longstanding Executive Orders or laws requiring legislative studies that have been completed.
     */
    archivedDate?: Date;
    /**
     * The various law categories that apply to this law
     */
    categories: Category[];
    /**
     * The contacts for the given law, returned only if the parameter poc is true
     */
    contacts?: Poc[];
    /**
     * The date the enacting legislation (if applicable) was signed into law.
     */
    enactedDate?: Date;
    /**
     * The date the incentive/law/regulation is set to end.
     */
    expiredDate?: Date;
    /**
     * A unique identifier for this specific incentive/law/regulation.
     */
    id: number;
    /**
     * The true or false value used to distinguish between recent federal executive actions (TRUE) and active incentives/laws/regulations (FALSE).
     */
    isRecent?: boolean;
    /**
     * Description of the incentive/law/regulation, including applicable legislative references, in <a href="https://guides.github.com/features/mastering-markdown/">markdown formatting</a>
     */
    plaintext: string;
    /**
     * An indicator if the last significant update was an update or the laws creation.
     */
    recentUpdateOrNew?: string;
    /**
     * The URL associated with any bill or legislative reference included in the description.
     */
    references: LawReference[];
    /**
     * The date legislation is enacted or a rulemaking is finalized to repeal the incentive/law/regulation.
     */
    repealedDate?: Date;
    /**
     * The numerical value assigned to a description to show the order in which it is displayed online within a jurisdiction (state).
     */
    seqNum?: number;
    /**
     * When the last significant update to the law was made.
     */
    significantUpdateDate?: Date;
    /**
     * The state in which the incentive/law/regulation was enacted and is active.
     */
    state: string;
    /**
     * Description of the incentive/law/regulation, including applicable legislative references, html formated.
     */
    text: string;
    /**
     * The brief title assigned to the incentive/law/regulation description.
     */
    title: string;
    /**
     * For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards
     */
    topics: LawTopics[];
    /**
     * The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives
     */
    type: string;
    /**
     * The types that apply to this law
     */
    types: LawType[];
}
