package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IpBlocklistResponse {
    @JsonProperty("blocklists")
    public String[] blocklists;
    public IpBlocklistResponse withBlocklists(String[] blocklists) {
        this.blocklists = blocklists;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public IpBlocklistResponse withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("isBot")
    public Boolean isBot;
    public IpBlocklistResponse withIsBot(Boolean isBot) {
        this.isBot = isBot;
        return this;
    }
    @JsonProperty("isDshield")
    public Boolean isDshield;
    public IpBlocklistResponse withIsDshield(Boolean isDshield) {
        this.isDshield = isDshield;
        return this;
    }
    @JsonProperty("isExploitBot")
    public Boolean isExploitBot;
    public IpBlocklistResponse withIsExploitBot(Boolean isExploitBot) {
        this.isExploitBot = isExploitBot;
        return this;
    }
    @JsonProperty("isHijacked")
    public Boolean isHijacked;
    public IpBlocklistResponse withIsHijacked(Boolean isHijacked) {
        this.isHijacked = isHijacked;
        return this;
    }
    @JsonProperty("isListed")
    public Boolean isListed;
    public IpBlocklistResponse withIsListed(Boolean isListed) {
        this.isListed = isListed;
        return this;
    }
    @JsonProperty("isMalware")
    public Boolean isMalware;
    public IpBlocklistResponse withIsMalware(Boolean isMalware) {
        this.isMalware = isMalware;
        return this;
    }
    @JsonProperty("isProxy")
    public Boolean isProxy;
    public IpBlocklistResponse withIsProxy(Boolean isProxy) {
        this.isProxy = isProxy;
        return this;
    }
    @JsonProperty("isSpamBot")
    public Boolean isSpamBot;
    public IpBlocklistResponse withIsSpamBot(Boolean isSpamBot) {
        this.isSpamBot = isSpamBot;
        return this;
    }
    @JsonProperty("isSpider")
    public Boolean isSpider;
    public IpBlocklistResponse withIsSpider(Boolean isSpider) {
        this.isSpider = isSpider;
        return this;
    }
    @JsonProperty("isSpyware")
    public Boolean isSpyware;
    public IpBlocklistResponse withIsSpyware(Boolean isSpyware) {
        this.isSpyware = isSpyware;
        return this;
    }
    @JsonProperty("isTor")
    public Boolean isTor;
    public IpBlocklistResponse withIsTor(Boolean isTor) {
        this.isTor = isTor;
        return this;
    }
    @JsonProperty("isVpn")
    public Boolean isVpn;
    public IpBlocklistResponse withIsVpn(Boolean isVpn) {
        this.isVpn = isVpn;
        return this;
    }
    @JsonProperty("lastSeen")
    public Integer lastSeen;
    public IpBlocklistResponse withLastSeen(Integer lastSeen) {
        this.lastSeen = lastSeen;
        return this;
    }
    @JsonProperty("listCount")
    public Integer listCount;
    public IpBlocklistResponse withListCount(Integer listCount) {
        this.listCount = listCount;
        return this;
    }
    @JsonProperty("sensors")
    public String[] sensors;
    public IpBlocklistResponse withSensors(String[] sensors) {
        this.sensors = sensors;
        return this;
    }
}