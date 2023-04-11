import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For local incentive/regulation descriptions, the category that the incentive/regulation falls under, described below: Infrastructure Requirements, Vehicle Purchase and Infrastructure Development Incentives, Fuel Use Incentives, Parking Incentives, Technical Assistance, Vehicle Acquisition Requirements, Promotion Initiatives, Idle Reduction Requirements, Renewable Fuels Mandates and Standards
 */
export declare class LawTopics extends SpeakeasyBase {
    /**
     * The database id of the law topic
     */
    id: number;
    /**
     * The sort order of the law topic
     */
    sortOrder: number;
    /**
     * The name of the law topic
     */
    title: string;
}
