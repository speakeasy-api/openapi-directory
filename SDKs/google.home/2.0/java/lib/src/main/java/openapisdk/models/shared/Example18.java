package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Example18 {
    @JsonProperty("alarm")
    public Alarm[] alarm;
    public Example18 withAlarm(Alarm[] alarm) {
        this.alarm = alarm;
        return this;
    }
    @JsonProperty("timer")
    public Timer[] timer;
    public Example18 withTimer(Timer[] timer) {
        this.timer = timer;
        return this;
    }
}