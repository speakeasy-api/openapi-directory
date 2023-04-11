import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * The type of slash command.
 */
export declare enum SlashCommandMetadataTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Add = "ADD",
    Invoke = "INVOKE"
}
/**
 * Annotation metadata for slash commands (/).
 */
export declare class SlashCommandMetadata extends SpeakeasyBase {
    /**
     * A user in Google Chat.
     */
    bot?: User;
    /**
     * The command id of the invoked slash command.
     */
    commandId?: string;
    /**
     * The name of the invoked slash command.
     */
    commandName?: string;
    /**
     * Indicating whether the slash command is for a dialog.
     */
    triggersDialog?: boolean;
    /**
     * The type of slash command.
     */
    type?: SlashCommandMetadataTypeEnum;
}
