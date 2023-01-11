package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IpFiltering
 * The filtering configuration block for a service of globally.
**/
public class IpFiltering {
    @JsonProperty("blacklist")
    public String[] blacklist;
    public IpFiltering withBlacklist(String[] blacklist) {
        this.blacklist = blacklist;
        return this;
    }
    @JsonProperty("whitelist")
    public String[] whitelist;
    public IpFiltering withWhitelist(String[] whitelist) {
        this.whitelist = whitelist;
        return this;
    }
}