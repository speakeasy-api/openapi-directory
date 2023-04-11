import { SpeakeasyBase } from "../../../internal/utils";
export declare class Destination extends SpeakeasyBase {
    /**
     * For publicly routable host.
     */
    host?: string;
    /**
     * The port is the target port number that is accepted by the destination.
     */
    port?: number;
    /**
     * PSC service attachments. Format: projects/* /regions/* /serviceAttachments/*
     */
    serviceAttachment?: string;
}
