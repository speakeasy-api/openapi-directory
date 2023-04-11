import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * Project cards represent a scope of work.
 */
export declare class ProjectCard extends SpeakeasyBase {
    /**
     * Whether or not the card is archived
     */
    archived?: boolean;
    columnName?: string;
    columnUrl: string;
    contentUrl?: string;
    createdAt: Date;
    /**
     * Simple User
     */
    creator: NullableSimpleUser;
    /**
     * The project card's ID
     */
    id: number;
    nodeId: string;
    note: string;
    projectId?: string;
    projectUrl: string;
    updatedAt: Date;
    url: string;
}
