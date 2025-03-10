/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WebApp - A web app.
 */
public class WebApp {
    /**
     * The display mode of the web app.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayMode")
    public WebAppDisplayModeEnum displayMode;

    public WebApp withDisplayMode(WebAppDisplayModeEnum displayMode) {
        this.displayMode = displayMode;
        return this;
    }
    
    /**
     * A list of icons for the web app. Must have at least one element.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icons")
    public WebAppIcon[] icons;

    public WebApp withIcons(WebAppIcon[] icons) {
        this.icons = icons;
        return this;
    }
    
    /**
     * The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId}/webApps/{packageName}.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public WebApp withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The start URL, i.e. the URL that should load when the user opens the application.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startUrl")
    public String startUrl;

    public WebApp withStartUrl(String startUrl) {
        this.startUrl = startUrl;
        return this;
    }
    
    /**
     * The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public WebApp withTitle(String title) {
        this.title = title;
        return this;
    }
    
    /**
     * The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionCode")
    public String versionCode;

    public WebApp withVersionCode(String versionCode) {
        this.versionCode = versionCode;
        return this;
    }
    
    public WebApp(){}
}
