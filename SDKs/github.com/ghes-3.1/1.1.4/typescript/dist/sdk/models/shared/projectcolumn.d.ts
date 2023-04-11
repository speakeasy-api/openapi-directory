import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Project columns contain cards of work.
 */
export declare class ProjectColumn extends SpeakeasyBase {
    cardsUrl: string;
    createdAt: Date;
    /**
     * The unique identifier of the project column
     */
    id: number;
    /**
     * Name of the project column
     */
    name: string;
    nodeId: string;
    projectUrl: string;
    updatedAt: Date;
    url: string;
}
