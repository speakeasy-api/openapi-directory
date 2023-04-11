import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Developer
 */
export declare class Developer extends SpeakeasyBase {
    /**
     * The time (in millis) of when this developer was created
     */
    created: number;
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: Record<string, any>;
    /**
     * The id of this developer
     */
    developerId: string;
    /**
     * The developer's email
     */
    email?: string;
    /**
     * The developer's name
     */
    name?: string;
    /**
     * The type for this developer
     */
    type?: string;
}
