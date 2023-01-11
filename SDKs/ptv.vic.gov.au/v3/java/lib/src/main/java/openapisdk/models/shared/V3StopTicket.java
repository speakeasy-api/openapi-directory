package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class V3StopTicket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_free_fare_zone")
    public Boolean isFreeFareZone;
    public V3StopTicket withIsFreeFareZone(Boolean isFreeFareZone) {
        this.isFreeFareZone = isFreeFareZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ticket_checks")
    public Boolean ticketChecks;
    public V3StopTicket withTicketChecks(Boolean ticketChecks) {
        this.ticketChecks = ticketChecks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ticket_machine")
    public Boolean ticketMachine;
    public V3StopTicket withTicketMachine(Boolean ticketMachine) {
        this.ticketMachine = ticketMachine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ticket_type")
    public String ticketType;
    public V3StopTicket withTicketType(String ticketType) {
        this.ticketType = ticketType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ticket_zones")
    public Integer[] ticketZones;
    public V3StopTicket withTicketZones(Integer[] ticketZones) {
        this.ticketZones = ticketZones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vline_reservation")
    public Boolean vlineReservation;
    public V3StopTicket withVlineReservation(Boolean vlineReservation) {
        this.vlineReservation = vlineReservation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public V3StopTicket withZone(String zone) {
        this.zone = zone;
        return this;
    }
}