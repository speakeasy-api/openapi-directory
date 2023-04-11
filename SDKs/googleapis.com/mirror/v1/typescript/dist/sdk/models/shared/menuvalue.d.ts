import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single value that is part of a MenuItem.
 */
export declare class MenuValue extends SpeakeasyBase {
    /**
     * The name to display for the menu item. If you specify this property for a built-in menu item, the default contextual voice command for that menu item is not shown.
     */
    displayName?: string;
    /**
     * URL of an icon to display with the menu item.
     */
    iconUrl?: string;
    /**
     * The state that this value applies to. Allowed values are:
     *
     * @remarks
     * - DEFAULT - Default value shown when displayed in the menuItems list.
     * - PENDING - Value shown when the menuItem has been selected by the user but can still be cancelled.
     * - CONFIRMED - Value shown when the menuItem has been selected by the user and can no longer be cancelled.
     */
    state?: string;
}
