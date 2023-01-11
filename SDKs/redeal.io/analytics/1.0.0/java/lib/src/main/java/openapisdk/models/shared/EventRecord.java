package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class EventRecord {
    @JsonProperty("agent")
    public String agent;
    public EventRecord withAgent(String agent) {
        this.agent = agent;
        return this;
    }
    @JsonProperty("browsertype")
    public String browsertype;
    public EventRecord withBrowsertype(String browsertype) {
        this.browsertype = browsertype;
        return this;
    }
    @JsonProperty("channel")
    public String channel;
    public EventRecord withChannel(String channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("click")
    public String click;
    public EventRecord withClick(String click) {
        this.click = click;
        return this;
    }
    @JsonProperty("clicks")
    public Long clicks;
    public EventRecord withClicks(Long clicks) {
        this.clicks = clicks;
        return this;
    }
    @JsonProperty("code")
    public String code;
    public EventRecord withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("company")
    public String company;
    public EventRecord withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonProperty("contact")
    public String contact;
    public EventRecord withContact(String contact) {
        this.contact = contact;
        return this;
    }
    @JsonProperty("cost")
    public Double cost;
    public EventRecord withCost(Double cost) {
        this.cost = cost;
        return this;
    }
    @JsonProperty("costcurrency")
    public String costcurrency;
    public EventRecord withCostcurrency(String costcurrency) {
        this.costcurrency = costcurrency;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public EventRecord withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("deal")
    public String deal;
    public EventRecord withDeal(String deal) {
        this.deal = deal;
        return this;
    }
    @JsonProperty("deal name")
    public String dealName;
    public EventRecord withDealName(String dealName) {
        this.dealName = dealName;
        return this;
    }
    @JsonProperty("delay")
    public Long delay;
    public EventRecord withDelay(Long delay) {
        this.delay = delay;
        return this;
    }
    @JsonProperty("denyreason")
    public String denyreason;
    public EventRecord withDenyreason(String denyreason) {
        this.denyreason = denyreason;
        return this;
    }
    @JsonProperty("device")
    public String device;
    public EventRecord withDevice(String device) {
        this.device = device;
        return this;
    }
    @JsonProperty("devicetype")
    public String devicetype;
    public EventRecord withDevicetype(String devicetype) {
        this.devicetype = devicetype;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public EventRecord withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("emailaddrsha256")
    public String emailaddrsha256;
    public EventRecord withEmailaddrsha256(String emailaddrsha256) {
        this.emailaddrsha256 = emailaddrsha256;
        return this;
    }
    @JsonProperty("flow")
    public String flow;
    public EventRecord withFlow(String flow) {
        this.flow = flow;
        return this;
    }
    @JsonProperty("flowstep")
    public String flowstep;
    public EventRecord withFlowstep(String flowstep) {
        this.flowstep = flowstep;
        return this;
    }
    @JsonProperty("flowtype")
    public String flowtype;
    public EventRecord withFlowtype(String flowtype) {
        this.flowtype = flowtype;
        return this;
    }
    @JsonProperty("impression")
    public String impression;
    public EventRecord withImpression(String impression) {
        this.impression = impression;
        return this;
    }
    @JsonProperty("ip")
    public String ip;
    public EventRecord withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("latitude")
    public String latitude;
    public EventRecord withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public String longitude;
    public EventRecord withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("optin")
    public String optin;
    public EventRecord withOptin(String optin) {
        this.optin = optin;
        return this;
    }
    @JsonProperty("os")
    public String os;
    public EventRecord withOs(String os) {
        this.os = os;
        return this;
    }
    @JsonProperty("resolution")
    public String resolution;
    public EventRecord withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonProperty("revenue")
    public Double revenue;
    public EventRecord withRevenue(Double revenue) {
        this.revenue = revenue;
        return this;
    }
    @JsonProperty("role")
    public String role;
    public EventRecord withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonProperty("session")
    public String session;
    public EventRecord withSession(String session) {
        this.session = session;
        return this;
    }
    @JsonProperty("site")
    public String site;
    public EventRecord withSite(String site) {
        this.site = site;
        return this;
    }
    @JsonProperty("site name")
    public String siteName;
    public EventRecord withSiteName(String siteName) {
        this.siteName = siteName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public EventRecord withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public EventRecord withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("user")
    public String user;
    public EventRecord withUser(String user) {
        this.user = user;
        return this;
    }
    @JsonProperty("userlanguage")
    public String userlanguage;
    public EventRecord withUserlanguage(String userlanguage) {
        this.userlanguage = userlanguage;
        return this;
    }
}