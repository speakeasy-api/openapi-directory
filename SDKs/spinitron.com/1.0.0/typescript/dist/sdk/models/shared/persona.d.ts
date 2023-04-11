import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
export declare class PersonaLinks extends SpeakeasyBase {
    self?: Link;
    shows?: Link[];
}
/**
 * The `Persona` object describes a radio DJ/host. One person can have multiple personas
 */
export declare class Persona extends SpeakeasyBase {
    links?: PersonaLinks;
    /**
     * HTML-formatted biography
     */
    bio?: string;
    /**
     * DJ/host's email address
     */
    email?: string;
    id?: number;
    image?: string;
    /**
     * On-air DJ/host name
     */
    name?: string;
    /**
     * Since what year has the DJ/host been at the station?
     */
    since?: number;
    /**
     * URL to web site for the DJ/host
     */
    website?: string;
}
